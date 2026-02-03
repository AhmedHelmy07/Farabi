// Netlify-compatible AppEngine-style server entry
// Implements the exact shape the Netlify Angular runtime plugin expects.
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
	const context = getContext();

	// Example API endpoints can be defined here.
	// const pathname = new URL(request.url).pathname;
	// if (pathname === '/api/hello') {
	//   return Response.json({ message: 'Hello from the API' });
	// }

	const result = await angularAppEngine.handle(request, context);
	return result || new Response('Not found', { status: 404 });
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
// Also export a CommonEngine-style handler so the plugin can detect either format.
import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine.mjs';

const commonEngine = new CommonEngine();

export async function netlifyCommonEngineHandler(request: Request, context: any): Promise<Response> {
	// Example API endpoints could be added here if needed.
	return await render(commonEngine);
}
