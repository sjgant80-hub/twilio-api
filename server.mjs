import express from 'express';
const app = express();
app.use(express.json());
const UPSTREAM = process.env.UPSTREAM || 'https://api.twilio.com';

app.get('/health', (_,res) => res.json({ ok:true, service:'twilio-api', routes:100 }));

app.get('/2010-04-01/Accounts.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Addresses.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Addresses.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Addresses.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Addresses.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Applications.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Applications.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Applications.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Applications.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps/:ConnectAppSid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Local.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Local.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/MachineToMachine.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/MachineToMachine.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Mobile.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Mobile.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/National.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/National.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/SharedCost.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/SharedCost.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/TollFree.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/TollFree.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Voip.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Voip.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Balance.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Balance.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Calls.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Calls.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Events.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Events.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Conferences/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Conferences/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Conferences.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/ConnectApps.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/ConnectApps.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Addresses/:AddressSid/DependentPhoneNumbers.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Addresses/{AddressSid}/DependentPhoneNumbers.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Local.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Local.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Mobile.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Mobile.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/TollFree.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/TollFree.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Keys.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Keys.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Keys.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Keys.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members/:CallSid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members/:CallSid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Messages.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Messages.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Messages.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Messages.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Feedback.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/SigningKeys.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/SigningKeys.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/SigningKeys.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/SigningKeys.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Notifications/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Notifications.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Notifications.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Payments.json', async (req, res) => {
  try {
    const upstream = new URL('/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'twilio-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('twilio-api on :' + PORT));
