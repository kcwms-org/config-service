FROM mongodb/mongodb-community-server

# Expose the default MongoDB port
EXPOSE 27017

# Create a volume for persisting data
VOLUME ["/data/db"]