#!/bin/bash

cd ../client
yarn build
cd ../admin
yarn build
cd ..
mv client/build api/client
mv admin/build api/admin