import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PlaceholderItem = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        marginBottom={8}>
        <SkeletonPlaceholder.Item
          width={50}
          height={50}
          borderRadius={50 / 2}
          marginRight={12}
        />
        <SkeletonPlaceholder.Item flex={1}>
          <SkeletonPlaceholder.Item width={200} height={16} borderRadius={5} />
          <SkeletonPlaceholder.Item
            width={120}
            height={16}
            borderRadius={5}
            marginTop={3}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default function RatedDoctorPlaceholder() {
  return (
    <>
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
    </>
  );
}
