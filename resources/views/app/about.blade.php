@extends('layouts.app')

@section('page_content')

    @include(\Illuminate\Support\Facades\Auth::check() ? 'layouts.portal.partials.header' : 'layouts.auth.partials.header')

    <main class="info-page py-4 d-flex flex-grow-1">
        <div class="mt-4 w-100 px-5">
            <div>
                <h2>About QAnubis</h2>

                <p>
                    QAnubis is a MVP of a computer-assisted qualitative analysis software (CAQDAS).
                </p>


                <p class="m-0">
                    If you have any questions or suggestions feel free to contact me.
                </p>

                <p>
                    <span class="font-weight-bold">Email:</span> gili.schmidt@hotmail.com
                </p>
            </div>

            <div class="mt-5">
                <h2>Legal info</h2>
                Some icons used in this project where made by <a target="_blank"
                                                                 href="https://www.flaticon.com/authors/freepik"
                                                                 title="Freepik">Freepik</a> from <a
                    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    </main>
@endsection

