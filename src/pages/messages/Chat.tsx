import type { FormikHelpers, FormikProps } from 'formik';

import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import TimeAgo from '../../components/TimeAgo';
import TopAppBar from '../../components/TopAppBar';
import useMessages from '../../hooks/messages/useMessages';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import useFetchUser from '../../hooks/users/useFetchUser';
import GetFormikProps from '../../utils/GetFormikProps';

const Chat = () => {
  const [sendCheck, setSend] = useState(1);
  const recipientId = parseInt(useParams<{ id: string }>().id ?? '0');
  const { fetchMessages, messageList, seen, sendMessage } = useMessages();
  const currentUser = useCurrentUser();
  const { fetchUserById, user } = useFetchUser();

  useEffect(() => {
    fetchUserById(recipientId);
  }, [fetchUserById, recipientId]);

  const fetcher = useCallback(() => {
    fetchMessages(recipientId);
  }, [fetchMessages, recipientId]);

  useEffect(() => {
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendCheck]);

  useEffect(() => {
    setTimeout(fetcher, 5000);
  });

  useEffect(() => {
    setTimeout(() => {
      if (document.hasFocus()) {
        messageList?.forEach((message) => {
          if (!message.seen && message.recipientId === currentUser?.id) {
            seen(message.id);
            setSend(sendCheck - 1);
          }
        });
      }
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList]);

  const FormRef = useRef<FormikProps<SendMessageRequest>>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const HandleSubmit = (
    values: SendMessageRequest,
    formikHelpers: FormikHelpers<SendMessageRequest>,
  ) => {
    if (FormRef.current !== null) {
      const { setSubmitting } = FormRef.current;
      setSubmitting(true);
      sendMessage(recipientId, values).then((added) => {
        console.log('added', added.data);
        FormRef.current?.setValues(initialValues);
        formikHelpers.resetForm();
        setSend(sendCheck + 1);
      });
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    content: Yup.string(),
    files: Yup.mixed().test(
      'fileSize',
      'Each File size should be less than 5MB',
      (value) => {
        const fileArr = value as FileList;
        let totalSize = 0;
        for (let index = 0; index < fileArr.length; index++) {
          const element = fileArr[index];
          if (element.size > 5000000) {
            console.log('too large');
            return false;
          }
          totalSize += element.size;
        }
        if (totalSize > 20000000) {
          console.log('too large');
          return false;
        }
        return true;
      },
    ),
  });

  const initialValues: SendMessageRequest = {
    content: '',
    files: new DataTransfer().files,
  };

  return (
    <>
      <TopAppBar />
      <div>
        <h1>
          Chat with {user?.firstName + ' ' + user?.lastName} [{user?.role}]
        </h1>
        {messageList?.map((m) => (
          <div
            style={{
              backgroundColor:
                m.senderId === currentUser?.id ? 'palegreen' : 'paleturquoise',
            }}
            key={m.createdAt.toString()}
          >
            from : {m.senderId} <br />
            to : {m.recipientId} <br />
            content : {m.content} <br />
            files :
            {m.files.map((f, i) => (
              <a
                href={`http://localhost:8080/files/message-files/${m.senderId}/${m.recipientId}/${f}`}
                key={f}
              >
                {m.fileOriginalNames[i]}
              </a>
            ))}
            <br />
            created: {TimeAgo({ timestamp: m.createdAt })}
            {m.seen && 'seen'}
          </div>
        ))}
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        innerRef={FormRef}
        onSubmit={HandleSubmit}
        validationSchema={validationSchema}
      >
        {(FormikProps: FormikProps<SendMessageRequest>) => {
          const spread = GetFormikProps(FormikProps);
          return (
            <Form onSubmit={FormikProps.handleSubmit}>
              <TextField type="text" {...spread('content')} />
              {FormikProps.errors.files?.toString()}
              <input
                onChange={(event) => {
                  if (event.target.files !== null) {
                    FormikProps.setFieldValue(
                      'files',
                      event.target.files,
                      true,
                    );
                  } else {
                    FormikProps.setFieldValue(
                      'files',
                      new DataTransfer().files,
                      true,
                    );
                  }
                }}
                multiple
                name="files"
                ref={fileRef}
                type="file"
              ></input>
              <Button
                color="primary"
                fullWidth
                sx={{ borderRadius: 2, width: 1 / 3 }}
                type="submit"
                variant="contained"
              >
                Send
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Chat;
