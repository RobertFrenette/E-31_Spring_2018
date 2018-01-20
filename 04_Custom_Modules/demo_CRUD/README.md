# CRUD Demo 

## To Test (Happy Path)

### Execute in Terminal
```
$ node app.js create --name="Mt. Washington" --elev="6,288"
Mountain Created: Mt. Washington 6,288.

$ node app.js read   --name="Mt. Washington"
Mountain: Mt. Washington 6,288.

$ node app.js create --name="Mt. Adams" --elev="0,000"
Mountain Created: Mt. Adams 0,000.

$  node app.js list
Mountains:
Mt. Washington, 6,288'.
Mt. Adams, 0,000'.

$ node app.js update --name="Mt. Adams" --elev="5,799"
Mountain Updated: Mt. Adams 5,799.

$ node app.js read   --name="Mt. Adams"
Mountain: Mt. Adams 5,799.

$ node app.js delete --name="Mt. Adams"
Mountain (Mt. Adams) deleted.

$ node app.js list
Mountains:
Mt. Washington, 6,288'.
```
