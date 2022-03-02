@php($id = $id ?? uniqid())
@php($required = $required ?? false)
@php($value = $value ?? null)
@php($autocomplete = $autocomplete ?? null)

<div class="form-group">
    <label for="{{ $id }}">{{ $label }}</label>
    <input id="{{ $id }}" type="password"
           class="form-control
           @error($name) is-invalid @enderror"
           name="{{ $name }}"
           value="{{ $value }}"
           @if($required) required @endif
           @if($autocomplete) autocomplete="{{$name}}" @endif>

    @error($name)
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
     </span>
    @elseif(isset($help))
        <small class="form-text text-muted">
            {{ $help }}
        </small>
        @enderror
</div>
