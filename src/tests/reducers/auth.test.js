import moment from 'moment';
import authReducer from '../../reducers/auth';

test('should set uid', () => {
  const state = authReducer(undefined, { type: 'LOGIN', uid: 'abc123'  });
  expect(state).toEqual({
    uid: 'abc123'
  });
});

test('should clear uid', () => {
  const state = authReducer({ uid: 'abc123'  }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
