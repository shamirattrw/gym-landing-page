export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, address } = body;

    if (!name || !email || !phone || !address) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Lead submitted:', { name, email, phone, address });

    return Response.json({
      success: true,
      message: 'Lead submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting lead:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit lead' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
