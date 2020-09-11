import React from 'react';
import './Users.scss';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import { selectUsersList } from '../../store/selectors';
import { useOnMount } from '../../hooks/useOnMount';
import { loadUsers } from '../../store/actions';

const Users = () => {
  const info = useSelector(selectUsersList);
  const dispatch = useDispatch();

  useOnMount(() => {
    dispatch(loadUsers());
  });

  const loadMore = () => {
    dispatch(loadUsers(info.count + 6));
  };

  // if (info) {
  //   console.log(info);
  // }

  return (
    <div className="users">
      {info && (
        <div className="users__container">
          <h1 className="users__title">Our cheerful users</h1>
          <p className="users__text">Attention! Sorting users by registration date</p>
          <div className="users__list">
            { info.users.map((user) => (
              <UserCard
                imageUrl={user.photo}
                name={user.name}
                position={user.position}
                email={user.email}
                number={user.phone}
                key={user.id}
              />
            ))}
          </div>
          { info.count < info.total_users && (
          <button
            className="users__button"
            type="button"
            onClick={loadMore}
          >
            Show more
          </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Users;
