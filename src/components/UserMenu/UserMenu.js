import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import defaultAvatar from './defaultAvatar.png';
import s from './UserMenu.module.css'

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={ s.userMenu }>
      <img src={avatar} alt="avatar" width="32"  />
      <span className={s.userName}>Добро пожаловать, {name}</span>
      <Stack spacing={2} direction="row">
        <Button type="button"
          variant="contained"
          className={s.button}
          onClick={() => dispatch(authOperations.logOut())}>
        Logout
        </Button>
      </Stack>
    </div>
  );
}
