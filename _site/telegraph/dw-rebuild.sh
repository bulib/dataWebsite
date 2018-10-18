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

echo "--- BUILDING COMMANDS FROM USER INPUT ---"
while getopts "dp" OPTION
do
    case $OPTION in
        d)
            echo "You set flag -d for DEVELOPMENT"
      	    echo "building site for http://www-test.bu.edu/dev/data/ "
            jekyll_command+=",_config-dev.yml"
      	    sftp_command+=$dev_path
      	    echo $sftp_command
      	    break
            ;;
        p)
            echo "You set flag -p for PRODUCTION"
      	    echo "building site for http://www.bu.edu/data/"
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

echo "--- BUILDING WEBSITE ... ---"
eval "$jekyll_command"

echo "--- SENDING THE SITE TO THE SERVER ---"
eval "$sftp_command <<EOF
put -r _site/*
EOF"

echo "--- CLEANING UP... ---"
if ! git diff-index --quiet HEAD --; then
    echo "BE ADVISED: changes detected! stashing and dropping them..."
    eval "git stash"
    eval "git stash drop"
fi
eval "chmod +x _site/telegraph/dw-rebuild.sh"


echo "--- THANK YOU! ---"
