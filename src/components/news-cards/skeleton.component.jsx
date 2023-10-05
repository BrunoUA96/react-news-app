import ContentLoader from 'react-content-loader';

export const Skeleton = ({ width, height }) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <ContentLoader
      width={width}
      height={height}
      viewBox={viewBox}
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >
      <rect x="0" y="51%" rx="0" ry="0" width="20%" height="2%" />
      <rect x="80%" y="51%" rx="0" ry="0" width="20%" height="2%" />
      <rect x="0" y="55%" rx="0" ry="0" width="100%" height="5%" />
      <rect x="0" y="62%" rx="0" ry="0" width="100%" height="20%" />
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="50%" />
    </ContentLoader>
  );
};
