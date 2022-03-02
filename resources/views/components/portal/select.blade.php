@php($id = $id ?? uniqid())
@php($required = $required ?? false)
@php($multiple = $multiple ?? false)

<div class="form-group">
    <label class="form-label" for="{{ $id }}">{{ $label }}</label>

    <select id="{{ $id }}" name="{{$name}}"
            class="form-control select
            @error($name) is-invalid @enderror"
            @if($multiple) multiple="multiple" @endif>

        {!! $content !!}
    </select>

    @error($name)
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
     </span>
    @enderror
</div>
