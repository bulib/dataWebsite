## - Script to rebuild bu.edu/data - ##

# check for errors
set -e

# Set variables

user=aidans # [[ ADD YOUR USERNAME HERE ]]

local_path=~/projects/dw/ # [[ ADD REPO LOCATION HERE ex ~/Documents/github/bulib/dataWebsite]]
local_build=_site

server=webdev.bu.edu # [[ ADD SERVER LOCATION HERE ]]

dev_path=/web/d/e/dev/data  # [[ ADD DEV SERVER PATH HERE ]]
production_path=/web/d/a/data  # [[ ADD PRODUCTION PATH HERE]]

date=$(date)

jekyll_command="bundle exec jekyll build --config _config.yml"
sftp_command="sftp $user@$server:"


# move to dataWebsite directory
cd $local_path
echo "moved to:  $(pwd)"

while getopts "dp" OPTION
do
    case $OPTION in
        d)
            echo "############################"
    	    printf "\n\n\n"
            echo "You set flag -d for development"
	    echo "building site for http://www-test.bu.edu/dev/data/ "
	    printf "\n\n\n"
	    echo "############################"
            jekyll_command+=",_config-dev.yml"
	    sftp_command+=$dev_path
	    echo $sftp_command
	    break
            ;;
        p)
            echo "############################"
    	    printf "\n\n\n"
            echo "You set flag -p for PRODUCTION"
	    echo "building site for http://www.bu.edu/data/"
	    printf "\n\n\n"
	    echo "############################"
            jekyll_command+=",_config-production.yml"
    	    sftp_command+=$production_path
	    break
            exit
            ;;
        \?)
            echo "Used for the help menu"
            exit
            ;;
    esac
done

echo "############################"
echo "BUILDING WEBSITE ..."
echo "############################"
eval "$jekyll_command"

# Commit rebuild changes and push to github
echo "############################"
echo "STARTING GIT COMMANDS"
echo "############################"

git checkout gh-pages

if ! git diff-index --quiet HEAD --; then
    echo "changes detected - committing and pushing to github"
    git commit -a -m "site rebuild via dw-rebuild.sh $date"
    echo "commit made (date = $date)"
    git push origin gh-pages

fi

echo "############################"
printf "\n\n\n"
echo "SENDING THE SITE TO THE SERVER"
printf "\n\n\n"
echo "############################"

eval "$sftp_command <<EOF
put -r _site/*
EOF"


echo "############################"
printf "\n\n\n"
echo "THANK YOU"
printf "\n\n\n"
echo "############################"
