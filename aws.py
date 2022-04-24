access_key = '1A2K3I4AU4DKX2CMAJLHGEND'
secret_access_key = '1m2m3O4ZcKlNFvyv30P6n80IkPXtFQZgSpSu7NOtLHRy'
import boto3
def upload_s3():
    s3_client = boto3.client('s3',
                             aws_access_key_id=access_key,
                             aws_secret_access_key=secret_access_key,
                             region_name='us-east-1')

    s3_client.upload_file('data.json', "jsonfiledata", 'data.json')
upload_s3()
