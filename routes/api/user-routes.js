const router = require('express').Router();
const { User } = require('../../models');


//URL: /api/user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password

    });

    req.session.save(() => {
        req.session.userId = newUser.id,
        req.session.username = newUser.username,
        req.session.loggedIn = true,

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//URL: /api/user/login
router.post('/login', async (req, res) => {
  console.log("POST /api/user/login");
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    console.log('user: ', JSON.stringify(user));


    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }
    console.log('Verifying PASSWORD!!!...')
    const validPassword = user.checkPassword(req.body.password);

    // if (!validPassword) {
    //   console.log('VALID PASSWORD: ', validPassword);
    //   res.status(400).json({ message: 'No user account found!' });
    //   return;
    // }
    // console.log('Password is valid');

    req.session.save(() => {
        req.session.userId = user.id,
        req.session.username = user.username,
        req.session.loggedIn = true,
          console.log('Sending JSON data back');
      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'No user account found!' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
