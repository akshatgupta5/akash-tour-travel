from linkedin_api import Linkedin

# Authenticate using any Linkedin account credentials
api = Linkedin('guptaakshat123455@gmail.com', 'akshat12')

# GET a profile
profile = api.get_profile('aditi-sharma-careercoach')
# print(profile)
# GET a profiles contact info
bcontact_info = api.get_profile_contact_info('aditi-sharma-careercoach')
print(bcontact_info.text)
# GET 1st degree connections of a given profile
connections = api.get_profile_connections('1234asc12304')