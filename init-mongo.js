db.createUser({
  user: 'advreact',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'adv-react',
    },
  ],
})
