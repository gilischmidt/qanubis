@php($id = $id ?? uniqid())
@php($required = $required ?? false)
@php($value = $value ?? null)
@php($autofocus = $autofocus ?? false)
@php($readonly = $readonly ?? false)
@php($autocomplete = $autocomplete ?? false)
@php($max = $max ?? 255)

<div class="form-group">
    <label for="{{ $id }}">{{ $label }}@if($required)<span class="font-weight-bolder text-danger"
                                                           style="word-spacing: 0">*</span> @endif</label>
    <input id="{{ $id }}" type="text"
           class="form-control
           @error($name) is-invalid @enderror"
           name="{{ $name }}"
           value="{{ $value }}"
           @if($required) required @endif
           @if($readonly) readonly="{{$readonly}}" @endif
           @if($autocomplete) autocomplete="{{$autocomplete}}" @endif
           @if($autofocus) autofocus @endif
           @if($max) maxlength="{{ $max }}" @endif>

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
