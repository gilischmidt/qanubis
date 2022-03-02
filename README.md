# QAnubis
------------

An open-source web qualitative analysis software to support coding on PDF files.

Build with Laravel.

## Deployment

##### 1. Requirements

* PHP 7.4
* SQL Database (MySQL or Postgres)
* Composer (v2.0.11)

For more informations about how to deploy Laravel applications or how to setup HTTP servers for them
see https://laravel.com/docs/8.x/deployment.

##### 2. First deployment

1. Create a copy of the file `.env.example` with the name `.env`
2. Open this new file and change the configurations as needed
    1. Don't forget to set up corretely your database config
3. Open a terminal inside the project folder
4. Run `composer install --optimize-autoloader --no-dev` to install composer dependencies
5. Run `npm install` to install JS dependencies
6. Run `npm run prod` to compile JS dependencies
7. Run `php artisan key:generate` to generate the application key
8. Optimize the application by running the following commands:
    1. `php artisan route:cache`
    2. `php artisan view:cache`
9. Run `php artisan config:cache` to apply the previous changes to the .env file
10. Run `php artisan migrate` to create the database

##### 2. Deploy new version

1. Update application files
2. Open a terminal inside the project folder
3. Run `composer install --optimize-autoloader --no-dev` to update composer dependencies
4. Run `npm install` to install JS dependencies
5. Run `npm run prod` to compile JS dependencies
6. Optimize the application by running the following commands:
    1. `php artisan route:cache`
    2. `php artisan view:cache`
7. Run `php artisan config:cache`
8. Run `php artisan migrate` to update database structure

-----------

## Development

##### 1. Requirements

* PHP 7.4
* MySQL
* Nodejs (v14.16.0)
* Composer (v2.0.11)

##### 2. Setting up the enviroment

1. Clone this repository
2. Create a copy of the file `.env.example` with the name `.env`
3. Open this new file and change the configurations as needed
    1. Don't forget to set up corretely your database config
4. Open a terminal inside the project folder
5. Run `npm install` to install npm dependencies
6. Run `npm run dev` to compile JS dependencies
7. Run `composer install` to install composer dependencies
8. Run `php artisan key:generate` to generate the application key
9. Run `php artisan config:cache` to apply the previous changes to the .env file
10. Run `php artisan migrate --seed` to create the database

You may run `npm run watch` to watch for changes on assets files and recompile them automatically

##### 3. Running the project

1. You may run the project by simply opening a terminal inside the project folder and running `php artisan serve`. The
   address to access the system will be printed.
