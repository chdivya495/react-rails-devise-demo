# Prerequisite

Install Ruby
rvm install ruby-3.0.1

Install rails 
gem install rails -v '7.0.1'

# Project setup

Clone the repo using 
# HTTPS
git clone https://github.com/chdivya495/react-rails-devise-demo.git 

# SSH
git clone git@github.com:chdivya495/react-rails-devise-demo.git

Commmands to run
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
run

Go To Root Folder
`cd react-rails-devise-demo`

To run the backend server
`cd api/react-rails-devise-demo`
`bin/setup`

To run the frontend server
`cd frontend/react-rails-devise-demo`
`yarn install && yarn start`

Open Browser
http://localhost:5000 Frontend server
http://localhost:3000 Backend server
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

API Request For Signup

Request
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
HTTP METHOD: POST
URL: http://localhost:3000/auth
Body: form-data
image: Select a file.
name: Divya
nickname: divya
email: 'chdivya495@gmail.com'
password: '123456789'
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Response
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
    "status": "success",
    "data": {
        "email": "chdivya495@gmail.com",
        "provider": "email",
        "uid": "chdivya495@gmail.com",
        "id": 1,
        "allow_password_change": false,
        "name": "Divya",
        "nickname": "divya",
        "image": "#<ActionDispatch::Http::UploadedFile:0x00007fc18462a578>",
        "created_at": "2023-02-21T11:21:30.179Z",
        "updated_at": "2023-02-21T11:21:30.475Z"
    }
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

API Request For Signin

Request
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
HTTP METHOD: POST
URL: http://localhost:3000/auth/sign_in
Body: form-data
email: 'chdivya495@gmail.com'
password: '123456789'
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Response Headers:
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
uid: chdivya495@gmail.com
client: wUPjzRfnsoaihLEMENOyKA
access-token: v1cTfVS7aaV23pvRg_91IA
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Response
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
    "data": {
        "email": "chdivya495@gmail.com",
        "provider": "email",
        "uid": "chdivya495@gmail.com",
        "id": 1,
        "allow_password_change": false,
        "name": "Divya",
        "nickname": "divya",
        "image": "#<ActionDispatch::Http::UploadedFile:0x00007fc18462a578>"
    }
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

API Request For Validate Token

Request
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
HTTP METHOD: GET
URL: http://localhost:3000/auth/validate_token
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Request Headers
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
uid: chdivya495@gmail.com
client: wUPjzRfnsoaihLEMENOyKA
access-token: v1cTfVS7aaV23pvRg_91IA
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Response
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
    "success": true,
    "data": {
        "id": 1,
        "provider": "email",
        "uid": "chdivya495@gmail.com",
        "allow_password_change": false,
        "name": "Divya",
        "nickname": "divya",
        "image": "#<ActionDispatch::Http::UploadedFile:0x00007fc18462a578>",
        "email": "chdivya495@gmail.com"
    }
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


