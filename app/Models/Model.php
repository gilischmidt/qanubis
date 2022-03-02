<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as LaravelModel;


class Model extends LaravelModel
{
    protected $date_format = "d/m/Y";
    protected $datetime_format = "d/m/Y H:i";
    protected $datetimes_format = "d/m/Y H:i:s";
    protected $time_format = "H:i:s";

    public static function table($withSchema = false, $alias = null)
    {
        $self = with(new static);
        $table = $self->getTable();
        if ($withSchema) $table = $self->getQuery()->getConnection()->getDatabaseName() . "." . $table;
        if ($alias) $table .= " as " . $alias;
        return $table;
    }

    public function getTime($column)
    {
        if (!$this->getAttributeValue($column)) return null;
        return $this->getAttributeValue($column)->toTimeString();
    }

    public function getDate($column)
    {
        if (!$this->getAttributeValue($column)) return null;
        return $this->getAttributeValue($column)->format('m/d/Y');
    }

    public function getDateTime($column, $timeBefore = false)
    {
        if (!$this->getAttributeValue($column)) return null;

        if ($timeBefore) {
            return $this->getAttributeValue($column)->format('H:i:s m/d/Y');
        } else {
            return $this->getAttributeValue($column)->format('m/d/Y H:i:s');
        }
    }
}
