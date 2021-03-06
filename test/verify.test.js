import test from 'ava';
import {stub} from 'sinon';
import verify from '../lib/verify';

test.beforeEach(t => {
  // Stub the logger functions
  t.context.log = stub();
  t.context.logger = {log: t.context.log};
});

test('Throw SemanticReleaseError if "npmPublish" option is not a Boolean', async t => {
  const npmPublish = 42;
  const error = await t.throws(verify({npmPublish}, {}, t.context.logger));

  t.is(error.name, 'SemanticReleaseError');
  t.is(error.code, 'EINVALIDNPMPUBLISH');
});

test('Throw SemanticReleaseError if "tarballDir" option is not a String', async t => {
  const tarballDir = 42;
  const error = await t.throws(verify({tarballDir}, {}, t.context.logger));

  t.is(error.name, 'SemanticReleaseError');
  t.is(error.code, 'EINVALIDTARBALLDIR');
});
