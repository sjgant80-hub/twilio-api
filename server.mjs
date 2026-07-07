#!/usr/bin/env node
/**
 * twilio-api · HTTP proxy for Twilio
 * Sovereign estate wrapper for Twilio · Comms
 * Docs: https://www.twilio.com/docs/api
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'Twilio' }));
  res.end(JSON.stringify({ name: 'twilio-api', wraps: 'Twilio', docs: 'https://www.twilio.com/docs/api' }));
}).listen(PORT, () => console.log('twilio-api on', PORT));
