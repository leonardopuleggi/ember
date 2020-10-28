import Application from 'starter-3-20-x/app';
import config from 'starter-3-20-x/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
