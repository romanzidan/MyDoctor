import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PlaceholderItem = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        marginVertical={8}>
        <SkeletonPlaceholder.Item flex={1}>
          <SkeletonPlaceholder.Item width={200} height={16} borderRadius={5} />
          <SkeletonPlaceholder.Item
            width={120}
            height={16}
            borderRadius={5}
            marginTop={3}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item width={80} height={60} borderRadius={10} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default function NewsItemPlaceholder() {
  return (
    <>
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
    </>
  );
}
