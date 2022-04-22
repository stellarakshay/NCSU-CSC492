# Concert Web App

Welcome to the Concert Web application. This README covers setting up the project environment and properly installing new packages.

## Setup

### Python Version

This application is written for Python 3.7. If 3.7 is already your base python version, skip to the next section **Environment setup**.
If Python 3.7 is not your base python version or you do not have Python installed, please download or run the appropriate installer from [python.org](https://www.python.org/downloads/release/python-379/).

Note: If you are using Windows and adding another Python version, do not add the new version to you Path environment during install.

### Environment setup

The project environment is managed using [Pipenv](https://pipenv.pypa.io/en/latest/).
First, enter the project directory:
``` cd /ConcertWebDjango ```
Next, to install Pipenv, run the following command:
``` pip install --user pipenv ```
If Python is not part of your PATH variables, you will likely need to find the *pipfile.exe* and run the remaining commands from there.
By default, Pipenv will use the required version of Python listed in the *Pipfile*. If one is not listed, it will use whatever is available.
Now to create the environment, run:
``` pipenv install --ignore-pipfile ```
The above command will ignore what's in *Pipfile* and install all packages found in *Pipfile.lock*.
The *Pipfile.lock* serves as a snapshot of the latest successful build and should never be directly modified.
See **Installing new packages** for how to update *Pipfile.lock*.

Once the installation finished, the virtual environment will be ready to use.

### Project startup

If you are running the project locally, you will want to use **sqlite** instead of the normal **mysql**.
Follow the install instructions for your operating system on the [sqlite site](https://sqlite.org/download.html)
Since a different database is being used, you will need to change some settings in */concert_web_app/settings.py*.
Specifically, make sure the **DATABASES** variable is set to the follow:

```python
DATABASES = {
    'default': {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    #'ENGINE': 'django.db.backends.postgresql_psycopg2',
    #'NAME': os.environ.get('DB_NAME', 'concert'),
    #'USER': os.environ.get('DB_USER', 'ngitina'),
    #'PASSWORD': os.environ.get('DB_PASS', 'concert2019'),
    #'HOST': 'localhost',
    #'PORT': '5432',
    }
}
```

Also, comment out the **STATICFILES_DIRS** variable as follows:

```python
#STATICFILES_DIRS = [
#    os.path.join(BASE_DIR, "static_dirs")
#]
```

After modifying the */concert_web_app/settings.py* file, the application should be ready to run.
To run a command in the Pipenv virtual environment, you can either enter Pipenv shell mode or run a single command.
Each of the follow commands will start the project:

```bash
pipenv shell
python manage.py runserver
exit
```

OR

```bash
pipenv run python manage.py runserver
```

If everything is running properly, you should see the following message in your terminal:

```bash
Django version 3.0.8, using settings 'concert_web_app.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

## Installing new packages

This section assumes you followed the setup guide in **Setup**.
To install a new package, simply run the following:
``` pipenv install <package_name> ```
For detailed usage of this command, please see the [Pipenv documentation](https://pipenv.pypa.io/en/latest/basics/#specifying-versions-of-a-package).
After installing a new package and testing your code thoroughly, run the following:
``` pipenv lock ```
This will update *Pipfile.lock* with the packages and specific versions you are using.
Doing this will allow for quicker configurations on new setups instead of relying on installing everything manually.

## Removing the virtual environment

This section assumes you followed the setup guide in **Setup**.
To remove the virtual environment created by Pipenv, simply run:
``` pipenv --rm ```
