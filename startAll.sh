cd backend || exit

npm run develop &

sleep 5

cd ../frontend || exit

npm run dev