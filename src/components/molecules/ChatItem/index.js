import React from 'react';
import IsMe from './isMe';
import Other from './Other';

export default function ChatItem({isMe}) {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
}
