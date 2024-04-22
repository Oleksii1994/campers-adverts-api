import { MoreBtn } from './ShowMoreBtn.styled';
// import { useLocation } from 'react-router-dom';

// export const ShowMoreBtn = ({ id, onClick }) => {
//   const location = useLocation();
//   return (
//     <MoreBtn to={`${id}/features`} state={{ from: location }} onClick={onClick}>
//       Show more
//     </MoreBtn>
//   );
// };

export const ShowMoreBtn = ({ onClick }) => {
  return <MoreBtn onClick={onClick}>Show more</MoreBtn>;
};
