<nav id="header" class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
        <a class="navbar-brand" href="{{ url('/') }}">
            <img src="{{ asset('img/logo.svg') }}" style="height: 35px"
                 alt="logo"> {{ config('app.name', 'Laravel') }}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">

            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <!-- Authentication Links -->

                @guest
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}"><i class="fas fa-sign-in-alt mr-1"></i>
                            {{__('pages/auth/header.login') }}</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}"><i
                                class="fas fa-plus-circle mr-1"></i> {{ __('pages/auth/header.register') }}</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('about') }}"><i class="fas fa-info mr-1"></i> About</a>
                    </li>
                @else
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('logout') }}"
                           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            <i class="fas fa-sign-out-alt mr-1"></i> {{ __('pages/auth/header.logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                              style="display: none;">
                            @csrf
                        </form>
                    </li>
                @endguest

                @if(\App\Helpers\FeatureFlag::translations())
                    <li class="nav-item dropdown dropdown-locales-container">
                        <a class="nav-link dropdown-toggle" href="#" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            @lang('locales.'.session()->get('locale','en'))
                        </a>

                        <div class="dropdown-menu dropdown-locales dropdown-menu-right"
                             aria-labelledby="navbarDropdown">
                            <a class="nav-link" href="{{ route('localization','en') }}">
                                <img src="{{ asset('img/locales/en.svg') }}" class="locale-icon"
                                     alt="@lang('locales.en')"> @lang('locales.en')
                            </a>
                            <a class="nav-link" href="{{ route('localization','pt-BR') }}">
                                <img src="{{ asset('img/locales/pt-BR.svg') }}" class="locale-icon"
                                     alt="@lang('locales.en')"> @lang('locales.pt-BR')
                            </a>
                        </div>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</nav>
