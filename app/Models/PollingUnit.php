<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PollingUnit extends Model
{
    use HasFactory;
    protected $table = 'polling_unit';
    protected $primaryKey = 'uniqueid';

    public function lga(): BelongsTo
    {
        return $this->belongsTo(Lga::class, "lga_id");
    }

    public function announcedPUResults(): HasMany
    {
        return $this->hasMany(AnnouncedPUResults::class, "polling_unit_unique_id");
    }
}
