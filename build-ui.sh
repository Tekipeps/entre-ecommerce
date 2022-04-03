#!/bin/bash

cd client
yarn
yarn build
# cd ../admin
# yarn
# yarn build
cd ..
mv client/build api/client
mv admin/build api/admin
cd api
yarn