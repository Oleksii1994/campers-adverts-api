import Sprite from '../../img/symbol-defs.svg';

export const CamperReviews = ({ reviews }) => {
  const starsPainter = stars => {
    const items = [];

    for (let i = 0; i < 5; i += 1) {
      items.push(
        <li key={i}>
          <svg width="16" height="16" fill={i < stars ? '#FFC531' : '#F2F4F7'}>
            <use href={`${Sprite}#icon-star`} />
          </svg>
        </li>
      );
    }

    return items;
  };

  return (
    <div className="reviews-container">
      <ul>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <li key={index} className="review-item">
            <div className="flex-box-reviwer-raiting">
              <div className="reviwer-img">
                <p className="name-first-letter">{reviewer_name[0]}</p>
              </div>
              <div className="rating-box">
                <p className="reviewer-name">{reviewer_name}</p>
                <ul className="stars-icons-list">
                  {starsPainter(reviewer_rating)}
                </ul>
              </div>
            </div>
            <p className="comment">{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
