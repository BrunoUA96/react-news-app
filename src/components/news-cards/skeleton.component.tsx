import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface SkeletonInterface {
  width: number;
  height: number;
}

export const Skeleton: FC<SkeletonInterface> = ({ width, height }) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <ContentLoader
      width={width}
      height={height}
      viewBox={viewBox}
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >
      {/* Image */}
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="60%" />
      {/* Time Label */}
      <rect x="0" y="61.3%" rx="0" ry="0" width="20%" height="2%" />
      {/* Autor */}
      <rect x="80%" y="61.3%" rx="0" ry="0" width="20%" height="2%" />
      {/* Title */}
      <rect x="0" y="65%" rx="0" ry="0" width="100%" height="10%" />
      {/* Description */}
      <rect x="0" y="77%" rx="0" ry="0" width="100%" height="15%" />
    </ContentLoader>
  );
};
