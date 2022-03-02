@php($id = $id ?? uniqid())
@php($value = $value ?? false)

<div class="form-check">
    <input class="form-check-input" type="checkbox" name="{{ $name }}"
           id="{{ $id }}" {{ $value ? 'checked' : '' }}>

    <label class="form-check-label" for="{{ $id }}">
        {{ __('pages/auth/login.remember') }}
    </label>
</div>
