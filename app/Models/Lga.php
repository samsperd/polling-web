<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Lga extends Model
{
    use HasFactory;

    protected $table = 'lga';

    protected $primaryKey = "lga_id";


    public function pollingUnit(): HasMany
    {
        return $this->hasMany(PollingUnit::class, "lga_id");
    }

    public function announcedPUResults(): HasManyThrough
    {
        return $this->hasManyThrough(AnnouncedPUResults::class, PollingUnit::class, 'lga_id', 'polling_unit_uniqueid', 'lga_id', 'uniqueid');
    }
}
