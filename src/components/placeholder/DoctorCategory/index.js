import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function DoctorCategoryPlaceholder() {
  return (
    <SkeletonPlaceholder speed={800}>
      <SkeletonPlaceholder.Item
        alignItems="center"
        flexDirection="row"
        justifyContent="center">
        <SkeletonPlaceholder.Item
          width={100}
          height={120}
          borderRadius={10}
          marginRight={10}
        />
        <SkeletonPlaceholder.Item
          width={100}
          height={120}
          borderRadius={10}
          marginRight={10}
        />
        <SkeletonPlaceholder.Item
          width={100}
          height={120}
          borderRadius={10}
          marginRight={10}
        />
        <SkeletonPlaceholder.Item
          width={100}
          height={120}
          borderRadius={10}
          marginRight={10}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
