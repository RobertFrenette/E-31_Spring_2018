# MongoDB Atlas / Mongoose
This App is modified from the App shown in the [11_POST_Files Section](https://github.com/RobertFrenette/E-31_Spring_2018/tree/master/11_POST_Files) which used the File System to persist data. Here, we're using MongoDB Atlas / Mongoose.


## Generate the App (express-generator)
```
$ express --view=hbs demo_app
$ cd demo_app
$ npm install
$ npm install --save log-util express-session connect-cookies multer connect-flash mongoose dotenv
```
## Create the App 

See demo_app dir cotents.

### Execute in Terminal
```
$ npm start
```

### Launch App
Load [http://localhost:3000/](http://localhost:3000/) in your browser

![Screen Shot](img/img1.png?raw=true "Screen Shot")

### Test

#### Login (Fail)
+ UserName: FooBar
+ Password: password

![Screen Shot](img/screen_shot_1.png?raw=true "Screen Shot")

![Screen Shot](img/screen_shot_2.png?raw=true "Screen Shot")


#### Register (Success)
+ UserName: FooBar
+ Email: foobar@test.com
+ Password: password
+ Confirm: password

![Screen Shot](img/screen_shot_3.png?raw=true "Screen Shot")

![Screen Shot](img/screen_shot_4.png?raw=true "Screen Shot")


#### Register (Fail)
+ UserName: FooBar
+ Email: foobar@test.com
+ Password: password
+ Confirm: password

![Screen Shot](img/screen_shot_5.png?raw=true "Screen Shot")

![Screen Shot](img/screen_shot_6.png?raw=true "Screen Shot")

#### Login (Success)
+ UserName: FooBar
+ Password: password

![Screen Shot](img/screen_shot_7.png?raw=true "Screen Shot")

![Screen Shot](img/screen_shot_8.png?raw=true "Screen Shot")


#### Enter Blog Post (Success)
+ Hike Name: Mt. Washington
+ Effort: Strenuous
+ Description: Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.
+ Pic: YOUR_CHOICE_OF_PIC

![Screen Shot](img/screen_shot_9.png?raw=true "Screen Shot")

![Screen Shot](img/screen_shot_10.png?raw=true "Screen Shot")


#### Enter Blog Post (Fail - Duplicate Hike Name)
+ Hike Name: Mt. Washington
+ Effort: Strenuous
+ Description: Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.
+ Pic: YOUR_CHOICE_OF_PIC

![Screen Shot](img/screen_shot_11.png?raw=true "Screen Shot")

![Screen Shot](img/screen_shot_12.png?raw=true "Screen Shot")


#### Termial

![Screen Shot](img/screen_shot_13.png?raw=true "Screen Shot")
