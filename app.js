// import { getAuth, GoogleAuthProvider, signInWithReirdect } from "firebase/auth";

const   express         = require('express'),
        app             = express(),
        bodyParser      = require('body-parser'),
        path            = require ('path'),
        methodOverride  = require('method-override'),
        firebaseAdmin   = require('firebase-admin');

const key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDX2oPglV+HTKtR\nWt1AeNkLFaH4cz1h1p4wGUosnksCcYI9BfnY4dtSkqvMVj6lUR7p0QHAzMhEiYeV\nQo+TNyuLEmnD6nMKYuNU1QdIBEF28zR8pWwhwbNvw+89zFh6inYRm2ci+0YxXRGk\nfn0FJvK3Gbp9V+wkWr5vEpb8q0RSNI7HyAxySXw/6ct+/71lzv5OzRvW4OkKHhVc\n4I0/1/HSlEV2J8ERxu2SSnkXMLmHJtTwjuOSNVGL3Ph5Z2OaS8cgiaet+ZIBv8py\n3McDDOG4hdpuWtNM0WqNL4q5UANHfMW6xoLH0km2/zzuHRQDdcKf8NDe1mIPH5q5\nvlYMb4jfAgMBAAECggEACJ9Sc3pHPOmoa3ehOe354YvFX6rR/pWeCQoH+mNL8ZBX\ny8wKA6QpNV5/HVdenKglmRQMj8dX9dQc+RUV4VZ4ioKIST3h+leItDIaq3SvQ5Fw\nfQAqPLXDm+KfeZnIxdBZ6gpWotrKhLZ7U28edSiHboTJFcoZOG4liENQvU2ygEQS\nJp3G9xFB38MecVCmHmVLtm/22cxd+x6un7HUp6fHAVSFrEHnb5Xryaa1lcPOEFFX\nV+T4FRYrddSzCOHewX6G4lG8JsrDPvk9zrZwqB6dnN4JAVYPygqHB3oDxne3NDT+\ngcckv5GazpDUbB8NC1AJ+2rwsHEyYdOIsVCgt/kgSQKBgQD/2JYyKDysp7g4eXpe\nnOClt4Tu42MNJVBls5zbYuaCBOmn4MF3+w0m+hETZ4dHTxzhb88WjYqG822dsmGG\nyl20Mr6NYApd87WwlLLtdmCf3SsScBRrviwU+4g6iE+iVS9knNHCbBRvqnA2PY4G\nlGBccxrxEOVC6nZi+FmqNZLmxwKBgQDX+8R/cwfq3aJBWvCcg6gJE3cu/6KcHhTp\nMTvWaGzZdABvLN25i9xYtm5qG9YX8EMDs/Wxutd3XiW2rkCtsQfS336vHbQsspbM\n+zs10RQYcfamEELzOlxHjjUF4kDh9NXNbhkxzSa7ajT73AnANsxcjpecmybpoZWA\nd06MWfPVKQKBgQCdiR2isMf7gCKdE5/X1j01jTUba4Q4OfuxQ9GX/OP2t1OwfWJj\noIBOubf9/Md9jyc3YQNg3bKougeLDKWku8LLDFvs7XA0vbXojwdF1JhWl3bIGZ9Z\nYHYATYlqkTiHunA+QZmfX7GNuKLzox9qyb4z7uRt/3tLotdWxZlghzB3TQKBgEQr\nXdjQKMaTj5vLJThxQX8j2rFF1EAsKnNzq6w/p2N2/pAYfB8NKs4BPpZVFNzXY39u\ntHSVQV6Wo5amJxnrT0naarTAzlZxQ7GM9iJFTG9uwOenKEp2uBuJoeiqgcoPqc++\nGUujsb7jhbecuqMlaJkqFGZEfiKtcm9quKsJ1TEJAoGAYLMkEQ8rmvdghliY1eUh\nVoYGqCuRatgr6+U+/r4RC4BddAo+UPskNS9rmz1zrntyu23IEogtUBTiI5jO2uDk\n+MsMv3oM/KFDpTeAQ52+8KfxVJPC2ViBTTMDJ/ec66jAjgfKBKnMX/RLN/ZJotZZ\nYfXVqzFccGO5v2ex9ac8xnU=\n-----END PRIVATE KEY-----\n"

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
        "private_key": key.replace(/\\n/g, '\n'),
        "client_email": "firebase-adminsdk-lkw8c@news-live-7706f.iam.gserviceaccount.com",
        "project_id": "news-live-7706f"
    })
});

//* Requiring Routes
const   indexRoutes     = require('./routes/index');

app.use(bodyParser.urlencoded({extended: true}));
// app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('views', __dirname + '/views');

// app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(__dirname + '/public'));

// app.use(methodOverride('_method'));

//* Routes
app.use('/', indexRoutes);

//*  Localhost variables declaration
app.listen(8080, 'localhost', () => {
    console.log('NOWSCAST Server has started');
});