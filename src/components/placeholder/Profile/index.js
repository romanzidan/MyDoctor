import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function ProfilePlaceholder() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item alignItems="center" justifyContent="center">
        <SkeletonPlaceholder.Item width={100} height={100} borderRadius={50} />
        <SkeletonPlaceholder.Item
          width={200}
          height={20}
          borderRadius={4}
          marginTop={16}
        />
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={120}
          height={20}
          borderRadius={4}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
