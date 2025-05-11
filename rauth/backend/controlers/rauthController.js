import {User} from '../models/rauthModels'


const newUser = new User({
  role: "user",
});
await newUser.save();