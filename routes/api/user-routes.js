const router = require('express').Router();
const { User } = require('../../models');
const { route } = require('../html-routes');


//URL: /api/user
router.post('/', async (req, res) => {
  console.log('POST api/user');
  try {
    const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        about_me: req.body.about_me,
        sport: req.body.sport,
        league: req.body.league,
        team: req.body.team,
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

router.put('/:id', async( req,res) => {
  // URL: /api/user/:id
  console.log('PUT: user/:id');
  console.log("ABOUT ME VALUE:");
  console.log(req.body.about_me);
  try {
    const aboutme = await User.update(req.body, {
      where: {
        id: req.body.id
      }
    });
    
    res.status(200).json(aboutme);
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

    if (!validPassword) {
      console.log('VALID PASSWORD: ', validPassword);
      res.status(400).json({ message: 'No user account found!' });
      return;
    }
    console.log('Password is valid');

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

//PUT ROUTES

router.put

//GET ROUTES

router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id
      // where: {
      //   id: req.params.id
      // }
    );
    if (!userData) {
      res.status(404).json({ message: 'No user found!'});
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})
module.exports = router;
