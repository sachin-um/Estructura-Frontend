import type { FunctionComponent } from 'react';

import { formatDistanceToNow } from 'date-fns';

interface TimeAgoProps {
  timestamp: Date;
}

const TimeAgo: FunctionComponent<TimeAgoProps> = ({ timestamp }) => {
  return <span title="timestamp">{formatDistanceToNow(timestamp)} Ago.</span>;
};

export default TimeAgo;
