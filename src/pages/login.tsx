import { Amplify } from 'aws-amplify';
import React from 'react';
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from 'C:/Users/katou/Desktop/programing/bitcoinproject/bittrader-project/bittrader-app/src/aws-exports.js';


Amplify.configure(awsExports);

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator: boolean;
}

function login({ isPassedToWithAuthenticator}: Props) {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`);
  }
  console.log('isPassedToWithAuthenticator', isPassedToWithAuthenticator);
  console.log(Authenticator);
  console.log('AuthUser');
    return (
    <Authenticator signUpAttributes={[
        'email',
        'name',
      ]      }>
      
        {({ signOut, user }) => (
            
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
  );
}

export default login;
