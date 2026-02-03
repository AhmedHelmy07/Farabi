// Netlify-compatible AppEngine-style server entry
// Export default request handler for @netlify/angular-runtime to detect.
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-run';

// Create an AngularAppEngine instance using default options.
const engine = new AngularAppEngine({});

// Create a request handler adapted to Netlify using the runtime context.
const requestHandler = createRequestHandler(engine, getContext());

export default requestHandler;
