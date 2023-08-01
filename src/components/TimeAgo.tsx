import { formatDistanceToNow } from 'date-fns';
import { FunctionComponent } from 'react';

interface TimeAgoProps {
  timestamp: Date;
}

const TimeAgo: FunctionComponent<TimeAgoProps> = ({ timestamp }) => {
  return <span title="timestamp">{formatDistanceToNow(timestamp)} Ago.</span>;
};

export default TimeAgo;
