# Use the official PHP image as the base image
FROM php:7.4-fpm

# Install os packages
RUN apt update && apt install -y \
    git \
    nano \
    zlib1g-dev \
    libzip-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libwebp-dev \
    libcurl4-openssl-dev \
    unzip \
    curl \
    default-mysql-client \ 
    libpq-dev 

# Install extensions
RUN docker-php-ext-configure zip \
    && docker-php-ext-install zip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install gd \
    && docker-php-ext-install curl \
    && docker-php-ext-install pdo_pgsql \
    && docker-php-ext-install pgsql \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install mysqli

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Verify the Composer installation
RUN composer --version
