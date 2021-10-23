import React from 'react';
import IsMe from './isMe';
import Other from './Other';

export default function ChatItem({isMe, text, date, avatar}) {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <Other text={text} date={date} avatar={avatar} />;
}
