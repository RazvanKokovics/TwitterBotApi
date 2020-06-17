import config from './config';
import twit from 'twit';

const Twit = new twit(config);
const params = {
  q: 'ceo',
};

const searchUsers = (params) => {
  Twit.get('users/search', params, (err, data, response) => {
    if(!err) {
      data.map((user) => {
        console.log(user.location);
      });
    }
    else {
      console.log(err)
    }
  });
};

const app = () => {
  searchUsers(params);
};

app();

