<a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
    {{ Auth::user()->name }} <span class="caret"></span>
</a>

<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="{{ route('home') }}">
        <i class="fas fa-list-alt mr-1"></i> My projects
    </a>

    <a class="dropdown-item" href="{{ route('portal.profile.index') }}">
        <i class="fas fa-user mr-1"></i> Profile
    </a>

    <a class="dropdown-item" href="{{ route('about') }}">
        <i class="fas fa-info mr-1"></i> About
    </a>


    <a class="dropdown-item" href="{{ route('logout') }}"
       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
        <i class="fas fa-sign-out-alt mr-1"></i> {{ __('Logout') }}
    </a>

    <form id="logout-form" action="{{ route('logout') }}" method="POST"
          style="display: none;">
        @csrf
    </form>
</div>

